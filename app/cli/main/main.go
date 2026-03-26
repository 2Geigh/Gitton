package main

import (
	"fmt"
	"gitton/initialize"
	"log"
	"os"
)

var (
	filePath string = "./bin/120bpm-C-44.1kHz-1_blank_midi-empty Project/120bpm-C-44.1kHz-1_blank_midi-empty.als"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: gitton <command> [<args>]")
		os.Exit(1)
	}

	if len(os.Args) > 2 {
		log.Println("too many arguments")
		os.Exit(2)
	}

	if len(os.Args) > 1 {
		switch os.Args[1] {
		case "init":
			err := initialize.Init()
			if err != nil {
				log.Printf("init failed: %v", err)
				os.Exit(3)
			}
			os.Exit(0)
		case "help":
			fmt.Println("Help menu")
			os.Exit(0)
		default:
			fmt.Println("unknown command: see 'gitton help'")
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
