package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
)

var (
	filePath string = "./bin/120bpm-C-44.1kHz-1_blank_midi-empty Project/120bpm-C-44.1kHz-1_blank_midi-empty.als"
)

func main() {

	if len(os.Args) > 2 {
		log.Println("too many arguments")
		os.Exit(1)
	}

	if len(os.Args) > 1 {
		switch os.Args[1] {
		case "init":
			err := initialize()
			if err != nil {
				log.Printf("Init failed: %v", err)
				os.Exit(2)
			}
			os.Exit(0)
		default:
			fmt.Println("Welcome to the Gitton CLI! 🐈")
		}
	}

	// // Create new watcher.
	// watcher, err := fsnotify.NewWatcher()
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer watcher.Close()

	// // Start listening for events.
	// go func() {
	// 	for {
	// 		select {
	// 		case event, ok := <-watcher.Events:
	// 			if !ok {
	// 				return
	// 			}
	// 			if !isAlsFile(event.Name) {
	// 				continue
	// 			}
	// 			_, err := ReadAlsFile(event.Name)
	// 			if err != nil {
	// 				log.Println(fmt.Errorf("couldn't read .als file: %w", err))
	// 			}
	// 			log.Println("File change detected:", event.Name)

	// 		case err, ok := <-watcher.Errors:
	// 			if !ok {
	// 				log.Println("error:", err)
	// 				return
	// 			}
	// 		}
	// 	}
	// }()

	// // Add a path.
	// err = watcher.Add("./")
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// // Block main goroutine forever.
	// <-make(chan struct{})

	os.Exit(0)
}

func initialize() error {
	var (
		projectInfoDir string = "Ableton Project Info"
		alsFileExists  bool   = false
	)

	// Check if "Ableton Project Info" folder is in current directory
	_, err := os.Stat(projectInfoDir)
	if os.IsNotExist(err) {
		return fmt.Errorf("'%s' folder not found", projectInfoDir)
	}

	// Check if ".gitton" directory already exists
	_, err = os.Stat(".gitton")
	if !os.IsNotExist(err) {
		return fmt.Errorf(".gitton directory already exists")
	}

	// Check if .als file or .gitton is in current directory

	err = filepath.Walk(".", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return fmt.Errorf("inspect %s failed: %w", path, err)
		}
		if filepath.Ext(info.Name()) == ".als" {
			alsFileExists = true
			return filepath.SkipDir // Stop looking for other .als files
		}
		return nil
	})
	if err != nil {
		return fmt.Errorf("couldn't scan for .als file: %w", err)
	}
	if !alsFileExists {
		return fmt.Errorf("no .als file found")
	}

	// Create .gitton directory
	err = os.Mkdir(".gitton", 0640)
	if err != nil && !os.IsExist(err) {
		return fmt.Errorf("couldn't create .gitton directory: %w", err)
	}

	return nil
}
