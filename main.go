package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"io"
	"os"

	"github.com/clbanning/mxj/v2"
	"gopkg.in/yaml.v3"
)

var (
	filePath string = "./bin/120bpm-C-44.1kHz-1_blank_midi-empty Project/120bpm-C-44.1kHz-1_blank_midi-empty.als"
)

func main() {
	xml, err := ReadAlsFile(filePath)
	if err != nil {
		fmt.Print(fmt.Errorf("couldn't read .als file: %w", err))
	}

	yaml, err := convertXmlToYaml(xml)

	os.WriteFile("output.yaml", []byte(yaml), 0644)
	os.WriteFile("output.xml", []byte(xml), 0644)
}

func ReadAlsFile(filePath string) (string, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return "", err
	}

	if !isAlsFile(filePath) {
		return "", fmt.Errorf("input must be a .als file")
	}

	decompressed, err := decompressGzip(data)
	if err != nil {
		return "", fmt.Errorf("failed to decompress .als file: %w", err)
	}
	return decompressed, nil
}

func isAlsFile(filePath string) bool {
	return len(filePath) > len(".als") && filePath[len(filePath)-4:] == ".als"
}

func decompressGzip(data []byte) (string, error) {
	reader := bytes.NewReader(data)
	gzipReader, err := gzip.NewReader(reader)
	if err != nil {
		return "", err
	}
	defer gzipReader.Close()

	decompressedData, err := io.ReadAll(gzipReader)
	if err != nil {
		return "", err
	}
	return string(decompressedData), nil
}

func convertXmlToYaml(xml string) (string, error) {
	// Parse XML into a generic map (mxj.Map)
	// mxj.NewMapXml handles unpredictable XML tree structures
	mv, err := mxj.NewMapXml([]byte(xml))
	if err != nil {
		return "", fmt.Errorf("failed to parse XML: %w", err)
	}

	yamlBytes, err := yaml.Marshal(mv)
	if err != nil {
		return "", fmt.Errorf("failed to generate YAML: %w", err)
	}

	return string(yamlBytes), nil
}
