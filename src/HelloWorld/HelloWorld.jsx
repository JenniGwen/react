export default function HelloWorld() {
    return (
        // Langkah 3: Bungkus komponen anak di dalam tag pembungkus
        <WadahTeks>
            <HeaderHelloWorld name="Piupiu" />
            <IsiHelloWorld text="This is a description" />
        </WadahTeks>
    )
}

// Langkah 1: Buat Komponen Wadah yang menerima { children }
export function WadahTeks({ children }) {
    return (
        <div style={{ border: '2px solid black', padding: '10px' }}>
            {/* Langkah 2: Panggil 'children' di tempat isi mau ditampilkan */}
            {children}
        </div>
    )
}

export function HeaderHelloWorld({ name }) {
    return <h1>{name}</h1>
}

export function IsiHelloWorld(props) {
    return <p>{props.text}</p>
}