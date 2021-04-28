
import Swal from 'sweetalert2';

const InfoAlert = (alertMessage) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: alertMessage,
        //footer: '<a href>Why do I have this issue?</a>'
    })
}
export default InfoAlert;