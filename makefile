# Define variables
APP_NAME=gitton
SRC_DIR=./cmd/main.go
BUILD_DIR=./bin
GOFLAGS=-v
GOOS=linux
GOARCH=amd64

# Default target
all: test clean build

build:
	@echo "Building..."
	mkdir -p $(BUILD_DIR)
	go build $(GOFLAGS) -o $(BUILD_DIR)/$(APP_NAME) $(SRC_DIR)
	@echo "Build complete. Find it at: $(BUILD_DIR)/$(APP_NAME)"
test:
	@echo "Running tests..."
	go test $(GOFLAGS) ./...
	@echo "Testing completed."

clean:
	@echo "Cleaning up..."
	rm -rf $(BUILD_DIR)
	@echo "Cleanup complete."

run:
	@echo "Executing $(APP_NAME)..."
	$(BUILD_DIR)/$(APP_NAME)

install:
	go install $(GOFLAGS) ./...

.PHONY: all build test clean run install
