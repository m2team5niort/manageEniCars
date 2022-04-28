import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";

export default function Modal({type, page, setFormData, formData, createCar, modal, setModal}){

    function renderModal(page, type, setFormData, formData, createCar, modal, setModal){
        switch(page){
            case 'car':
                return <ModalCar type={type} setFormData={setFormData} formData={formData} createCar={createCar} modal={modal} setModal={setModal}/>
                break;
            case 'model':
                return <ModalModel />
                
        }
    }

    return(
        <>
            {renderModal(page,type, setFormData, formData, createCar, modal, setModal)}
        </>
    )
}