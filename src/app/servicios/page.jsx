import Services from '../../components/Services/Services'
import Process from '../../components/Process/Process'

export const metadata = {
    title: 'Servicios | Wahandri Freelance',
    description: 'Paquetes de diseño web, landing pages y tiendas online.',
}

export default function ServicesPage() {
    return (
        <>
            <Services />
            <Process />
        </>
    )
}
