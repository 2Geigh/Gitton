package initialize

import (
	"fmt"
	"os"
	"path/filepath"
)

var (
	permissions os.FileMode = 0700
)

func Init() error {
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
	err = os.Mkdir(".gitton", permissions)
	if err != nil && !os.IsExist(err) {
		return fmt.Errorf("couldn't create .gitton directory: %w", err)
	}

	// Create .gitton subdirectories
	err = os.Mkdir(".gitton/HEAD", permissions)
	if err != nil {
		return fmt.Errorf("mkdir 'HEAD' failed: %w", err)
	}

	err = os.Mkdir(".gitton/config", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/config' failed: %w", err)
	}

	err = build_objects_directory()
	if err != nil {
		return fmt.Errorf("'.gitton/objects' directory build failed: %w", err)
	}

	err = build_refs_directory()
	if err != nil {
		return fmt.Errorf("'.gitton/refs' directory build failed: %w", err)
	}

	return nil
}

func build_objects_directory() error {
	err := os.Mkdir(".gitton/objects", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/objects' failed: %w", err)
	}

	err = os.Mkdir(".gitton/objects/info", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/objects/info' failed: %w", err)
	}

	err = os.Mkdir(".gitton/objects/pack", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/objects/pack' failed: %w", err)
	}

	return nil
}

func build_refs_directory() error {
	err := os.Mkdir(".gitton/refs", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/refs' failed: %w", err)
	}

	err = os.Mkdir(".gitton/refs/heads", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/refs/heads' failed: %w", err)
	}

	err = os.Mkdir(".gitton/refs/tags", permissions)
	if err != nil {
		return fmt.Errorf("mkdir '.gitton/refs/tags' failed: %w", err)
	}

	return nil
}
