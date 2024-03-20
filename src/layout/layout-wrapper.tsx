import ModalWrapper from "../components/modals/modal-wrapper"
export default function LayoutWrapper({children}: { children: React.ReactNode }) {
    return (
        <main className="bg-gray-900 h-screen rounded-md">
            <section>{children}</section>
            <ModalWrapper/>
        </main>
    )
}
