import { HeroServices } from '@/components'
import newPatient from '../../public/heroImage3.jpg'
import ContactForm from '@/components/ContactForm'

const NewPatients = () => {

    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className='relative w-full h-screen'>
                <HeroServices src={newPatient} heading="New Patient" message="Fill Out Form Below" />
            </div>

            <ContactForm />
        </div >
    )
}

export default NewPatients 
