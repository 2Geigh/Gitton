package main

import (
	"bytes"
	"compress/gzip"
	"errors"
	"fmt"
	"io"
	"os"
)

var (
	filePath string = "../../Ableton/2024/12月2024/Yukon Project/Yukon.als"
)

func main() {
	file, err := ReadAlsFile(filePath)
	if err != nil {
		fmt.Print(err)
	}

	fmt.Print(file)

	os.Create("output")
	os.WriteFile("output", []byte(file), 0644)
}

// ReadAlsFile reads an .als file and returns its decompressed XML content.
// It also supports reading already decompressed .xml files.
func ReadAlsFile(filePath string) (string, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return "", err
	}

	// If it's an .als file, decompress it
	if isAlsFile(filePath) {
		decompressed, err := decompressGzip(data)
		if err != nil {
			return "", errors.New("failed to decompress .als file: " + err.Error())
		}
		return decompressed, nil
	}

	// Already XML, return as-is
	return string(data), nil
}

// ReadAlsBuffer decompresses a buffer containing .als file content.
// Useful for web applications where file content is already in memory.
func ReadAlsBuffer(buffer []byte) (string, error) {
	decompressed, err := decompressGzip(buffer)
	if err != nil {
		return "", errors.New("failed to decompress .als buffer: " + err.Error())
	}
	return decompressed, nil
}

// isAlsFile checks if the file extension is .als
func isAlsFile(filePath string) bool {
	return len(filePath) > 4 && filePath[len(filePath)-4:] == ".als"
}

// decompressGzip decompresses gzip compressed data
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
