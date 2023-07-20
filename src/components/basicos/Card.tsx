

export default function Card(props:any) {
    return (
    <div className=" flex rounded-md h-64 w-64 text-3xl bg-slate-600 justify-center items-center">
        {props.name}
    </div>
    );
}