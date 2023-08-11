/*
a single object that returns several components. 
This can be used to accomplish what is sometimes referred to as namespacing, 
where all components of a library have the same prefix. 
For example a Library object can contain a Reader and Book components:
*/

const Library = {
    Book({id}){
        return `Book ${id}`
    },
    Reader({id}){
        return `Reader ${id}`
    }
}

//These are then referred to using a dot notation:
//<Library.Reader id={456}> is reading 
//<Library.Book id={123}>

