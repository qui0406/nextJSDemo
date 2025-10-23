import x from "@/styles/app.module.css"
import y from "@/styles/test.module.css"

const Page = () =>{
  return(
    <div className={x['red']} >
      <span className={y['red']}>
        Demo NextJS
      </span>
    </div>
  )
}
export default Page;