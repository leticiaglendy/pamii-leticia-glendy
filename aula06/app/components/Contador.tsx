import React from "react";
import {Text, Button, View, StyleSheet} from 'react-native';

export default class Contador extends React.Component{
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar() {
        this. setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return (
            <View>
                <View style = {styles.texto}>
                    <Text>Número: {this.state.contador}</Text>
                </View>
                <View style = {styles.botoes}>
                    <Button
                    style = {styles.botao1}
                    title="Aumenta"
                    color='#8fbc8f'
                    onPress={this.Incrementar.bind(this)}
                    />
                    <Button
                    style = {styles.botao2}
                    onPress={this.Decrementar.bind(this)}
                    color='#1D438A'
                    title="Diminui"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 220,
        height: 40,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
});