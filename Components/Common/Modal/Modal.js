import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";

export default function Modal({setFormData, formData, createCar, setModal, modal, updateCar}){

    function renderModal(setFormData, formData, createCar, setModal, modal, updateCar){
        switch(modal.page){
            case 'car':
                return <ModalCar setFormData={setFormData} formData={formData} createCar={createCar} setModal={setModal} modal={modal} updateCar={updateCar}/>
                break;
            case 'model':
                return <ModalModel />
                
        }
    }

    return(
        <>
            {renderModal(setFormData, formData, createCar, setModal, modal, updateCar)}
        </>
    )
}