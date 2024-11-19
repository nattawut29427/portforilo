import { mysqlPool } from "@/app/utils/db"
import Link from "next/link";

export default async function TodoPage({}) {
    const promisePool = mysqlPool.promise()
    const todos = await promisePool.execute("select * from todos")
    const [rows, fields] = todos;
    
    return(
        <>
        <div>
            <h1>Todo list page</h1>

            <ul>
                {rows.map(row => (<li key={rows.id}><Link className="underline text-blue-500" href={'/dashboard/todo/'+ row.id}>{row.title}</Link></li>))}
            </ul>
        </div>
        </>
    )
}