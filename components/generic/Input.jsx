const Input = props => {
    return (  
        <input 
            {...props}
            className="outline-none border border-gray-300 rounded p-2 mt-3
                w-full focus:shadow-input  focus:border-pink-400"
        />
    );
}
 
export default Input;