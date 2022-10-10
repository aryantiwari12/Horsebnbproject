import { useState } from "react";
import "../Modal/Modal.css";



const Perviewstall = ({counter,setCounter,countstore,setcountstore}) => {

   
    const minus = () => {
        if (counter <= 0) {
            return;
        }
        else {
            setCounter(counter - 1)
        }
    }
    const plus = () => {
        setCounter(counter + 1)
    }

    const Storedata=()=>{
            setcountstore(counter)
            console.log(countstore)
    }

    


    return (
        <div class="modal fade" id="staticBackdropP" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabels" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-center" id="staticBackdropLabels">Add Stalls</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="">
                            <p>Stalls</p>
                            <i class="fa-solid fa-minus text-primary mt-2" role="button" onClick={minus}></i>
                            <p className="text-center position-absloute zero">{counter}</p>
                            <i class="fa-solid fa-plus text-primary mt-2" role="button" onClick={plus}></i>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={()=>Storedata()}>Next</button>
                        <button type="button" class="btn btn-primary">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default {
    Perviewstall
}