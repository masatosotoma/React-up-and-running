/*To test the state logic, all you need to do is pass both the old state 
and an action to the reducer function and check if the desired new state is returned. 
This is pure JavaScript: two objects in, one object out. 
The unit tests should not be much more complicated than testing the canonical example:*/

function add(a,b){
    return a+b;
}

/*a sample test could look like*/

const initialState = {data: [],color:'black',background:'white'};

it('produces a 10x10 array', ()=>{
    const{data} = myReducer(initialState,{type:'newdata'});
    expect(data.length).toEqual(10);
    expect(data[0].length).toEqual(10);
})