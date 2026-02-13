# Structure of A `.als` (Ableton Live Session) File

## Introduction

`.als` files are `gzip`-ed Extensible Markup Language (XML) files containing the project data.
This document is an attempt to map the functionality and meaning behind the numerous XML fields found in unzipped `.als` files.

Each header and its subheaders correspond to a project file's XML tag and its children

## Tags

### Ableton

Contains the following project metadata:

#### Creator

Contains the Ableton Live version the project was initialized in.

_ex: `Ableton Live 12.2.6`_

#### MajorVersion

Unknown.

_ex: `"5"`_

#### MinorVersion

Unknown.

_ex: `"12.0_12203"`_

#### Revision

Unknown.

_ex: `54fbddc6d0dc7047766a6a04b12063b5f6fe4b68`_

#### SchemaChangeCount

Unknown.

_ex: `"3"`_

### LiveSet

Contains the actual project data in its children tags.

#### InKey

Determines if the project is fixed in a particular key signature or not.

- key: `-Value`
- value: `"true"` or `"false"`

#### Tracks

Shows the list of MIDI and/or audio tracks in the project.

##### MidiTrack

###### Color

Shows the user-set colour of the track.

- key: `-Value`
- ex value: `"2"`
