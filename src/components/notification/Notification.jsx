import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./notification.css"
const Notification = () => {
  return (
    <div className=''>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Notification