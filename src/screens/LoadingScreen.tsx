import React from 'react';
import { View, Text, Center, ScrollView, SectionList, Divider, Spinner } from "native-base";

export class LoadingScreen extends React.Component {
    render() {
        return (
        <Center flex={1}>
            <Spinner size={100} color="red.400"/>
        </Center>
        )}
}