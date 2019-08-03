import React from 'react';

class List extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('http://alefesouza.dev/api/languages.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        let content = <p>Carregando...</p>

        if (this.state.linguagens.length !== 0) {
            content = (<ul>
                {this.state.linguagens.map(item => (
                    <li key={item.id}>
                        <p><b>Nome:</b> {item.name}</p>
                        <p><b>Criador:</b> {item.creator}</p>
                        <p><b>Ano de criação:</b> {item.year}</p>
                    </li>
                ))}
            </ul>)
        }

        return (
            <div>
                <h1>Lista de linguagens</h1>

                {content}
            </div>
        );
    }
}

export default List;
