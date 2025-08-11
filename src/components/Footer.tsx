export default function Footer() {
    return (
        <footer style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            background: "#f0f0f034",
            padding: "8px",
            textAlign: "center",
            fontSize: "14px",
            color: "#b1b1b1ff",
            zIndex: 100,
        }}>
            <p>
                Este projeto foi desenvolvido por mim durante o curso da Trybe.
                Conteúdo original adaptado — não reproduz trechos oficiais da plataforma.
            </p>
            <p>
                <a href="https://www.betrybe.com/termos-e-condicoes-cursos-flex" target="_blank" rel="noopener noreferrer">
                    Termos e Condições do Curso Flex
                </a>
            </p>
        </footer>
    );
}
