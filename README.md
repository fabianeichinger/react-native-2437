# Reproduction of React Native issue \#2437

GIFs are from [here](http://surrogateself.tumblr.com/) and [here](https://commons.wikimedia.org/wiki/Category:Very_large_GIF_files#/media/File:Lexington_original_configuration_edited.gif).

Will crash after a few tries in simulators (preferably older emulated devices) if TRIGGER_RACE in index.ios.js is set to true.
