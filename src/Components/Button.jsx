
function Button(props) {
  return (
    <div className=' my-4 flex justify-center flex-wrap'>
    <button className=' shadow-lg shadow-purple-500/50 bg-purple-700 text-white font-bold border-2 rounded-full px-4 py-1 hover:bg-purple-200 hover:text-black hover:ring-slate-950 ring-1' onClick={props.onClick}>
        {props.value}
    </button>
    </div>
  )
}

export default Button