import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";
import ModalLocation from "./ModalLocation";

export default function Modal({ setFormData, formData, createObject, updateObject, setModal, modal }) {

    function renderModal(setFormData, formData, createObject, updateObject, setModal, modal) {
        switch (modal.page) {
            case 'car':
                return <ModalCar setFormData={setFormData} formData={formData} createCar={createObject} updateCar={updateObject} setModal={setModal} modal={modal} />
                break;
            case 'model':
                return <ModalModel setFormData={setFormData} formData={formData} createModel={createObject} updateModel={updateObject} setModal={setModal} modal={modal} />
            case 'location':
                return <ModalLocation setFormData={setFormData} formData={formData} createLocation={createObject} updateLocation={updateObject} setModal={setModal} modal={modal} />

        }
    }

    return (
        <>
            {renderModal(setFormData, formData, createObject, updateObject, setModal, modal)}
        </>
    )
}