#!/bin/zsh
# Continuously stream history entries through the formatter.

tail -f history.txt | node formatlog.js
