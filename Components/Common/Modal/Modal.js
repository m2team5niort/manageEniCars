import ModalCar from "./ModalCar";
import ModalModel from "./ModalModel";
import ModalLocation from "./ModalLocation";
import ModalKey from "./ModalKey";
import ModalUser from "./ModalUser";
import ModalIncident from "./ModalIncident";

export default function Modal({ setFormData, formData, createObject, updateObject, setModal, modal }) {

    function renderModal(setFormData, formData, createObject, updateObject, setModal, modal) {
        switch (modal.page) {
            case 'car':
                return <ModalCar setFormData={setFormData} formData={formData} createCar={createObject} updateCar={updateObject} setModal={setModal} modal={modal} />
            case 'model':
                return <ModalModel setFormData={setFormData} formData={formData} createModel={createObject} updateModel={updateObject} setModal={setModal} modal={modal} />
            case 'location':
                return <ModalLocation setFormData={setFormData} formData={formData} createLocation={createObject} updateLocation={updateObject} setModal={setModal} modal={modal} />
            case 'key':
                return <ModalKey setFormData={setFormData} formData={formData} createKey={createObject} updateKey={updateObject} setModal={setModal} modal={modal} />
            case 'user':
                return <ModalUser setFormData={setFormData} formData={formData} createUser={createObject} updateUser={updateObject} setModal={setModal} modal={modal} /> 
            case 'incident':
                return <ModalIncident setFormData={setFormData} formData={formData} createIncident={createObject} updateIncident={updateObject} setModal={setModal} modal={modal} /> 
            }
    }

    return (
        <>
            {renderModal(setFormData, formData, createObject, updateObject, setModal, modal)}
        </>
    )
}