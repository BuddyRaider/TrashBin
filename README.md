# TrashBin
***
#### A Psuedo-Bytecode Programming Language By BuddyRaider
***
## Usage
- Create a file preferrably ending in ".tb" (TrashBin).
- Write your TrashBin code in this new file.
- Then run either of the following:
	- "node TrashBin.js *filename*". (Cross-Platform/Preferred)
	- "run.sh *filename*". (Only For Unix-Based Systems)
***
## Code Docs
#### TrashBin has a basic "*instruction* *parameter(s)*" syntax (Only one instruction per line), making it easy to read, and requiring fewer lines of code to parse.
#### Commands in Binary can be written with any number of bytes, as long as the represented binary number is the same, i.e. `0001` is the same as `1`, and `0011` is the same as `11`.
#### Print Statements **DO NOT** append a newline "\n" character, you must do this manually (`1010` is the binary for a newline character).
#### Here are the commands so far:
`~ *anything*`: Comment\
`0001 *plain text*`: Prints Raw Text.\
`0010 *binary number*`: Converts The Binary To Base 10 And Prints It.\
`0011 *binary number*`: Converts The Binary To Ascii And Prints It.\
`0100 *base 10 number*`: Converts The Number To Binary And Prints It.\
`0101 *Ascii text*`: Converts The Ascii To Binary And Prints It.\
`0110 *variable name*`: Prints Variable Value.\
`0111 *filename*`: Prints File Contents (Not Available Yet).\
`1000 *variable name* *plain text*`: Creates Variable With Raw Text.\
`1001 *variable name* *binary number*`: Converts The Binary To Base 10 And Stores It In Variable.\
`1011 *variable name* *binary number*`: Converts The Binary To Ascii And Stores It In Variable.\
`1100 *variable name* *base 10 number*`: Converts The Number To Binary And Stores It In Variable.\
`1101 *variable name* *Ascii text*`: Converts The Ascii To Binary And Stores It In Variable.\
`1111 *variable name* *variable name*`: Creates Copy Of Existing Variable.