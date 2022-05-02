import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";

export default function Modal({ setFormData, formData, createObject, updateObject, setModal, modal }) {

    function renderModal(setFormData, formData, createObject, updateObject, setModal, modal) {
        switch (modal.page) {
            case 'car':
                return <ModalCar setFormData={setFormData} formData={formData} createCar={createObject} updateCar={updateObject} setModal={setModal} modal={modal} />
                break;
            case 'model':
                return <ModalModel setFormData={setFormData} formData={formData} createModel={createModel} setModal={setModal} modal={modal} updateModel={updateModel}/>
                
        }
    }

    return (
        <>
            {renderModal(setFormData, formData, createObject, updateObject, setModal, modal)}
        </>
    )
}