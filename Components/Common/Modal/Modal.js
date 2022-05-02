import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";

export default function Modal({setFormData, formData, createCar, setModal, modal, updateCar, updateModel, createModel}){

    function renderModal(setFormData, formData, createCar, setModal, modal, updateCar){
        switch(modal.page){
            case 'car':
                return <ModalCar setFormData={setFormData} formData={formData} createCar={createCar} setModal={setModal} modal={modal} updateCar={updateCar}/>
                break;
            case 'model':
                return <ModalModel setFormData={setFormData} formData={formData} createModel={createModel} setModal={setModal} modal={modal} updateModel={updateModel}/>
                
        }
    }

    return(
        <>
            {renderModal(setFormData, formData, createCar, setModal, modal, updateCar, updateModel, createModel)}
        </>
    )
}