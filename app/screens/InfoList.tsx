import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { List, TextInput,Appbar, Text  } from 'react-native-paper';
const data = [
    {
      key: 0,
      title: 'Babies health',
      sub:'Your healthy pregnancy and baby care guide',
      doc: "https://zen-stonebraker-035bb4.netlify.app/babies-health.pdf"
    },
    {
      key: 1,
      title: 'Overcome stress',
      sub: 'Stress management for parents',
      doc: "https://zen-stonebraker-035bb4.netlify.app/overcome-stress.pdf"
    },
    {
      key: 2,
      title: 'Making a formula bottle',
      sub: 'How to PrepareFormula for Bottle-Feeding at Home',
      doc: "https://zen-stonebraker-035bb4.netlify.app/making-a-formula-bottle.pdf"
    },
    {
      key: 3,
      title: 'Changing diapers',
      sub: 'Safe and Healthy Diaperingto reduce the spread of germs',
      doc: "https://zen-stonebraker-035bb4.netlify.app/changing-diapers.pdf"
    },
    {
      key: 4,
      title: 'Books for babies',
      sub: 'The Complete Checklist: 100 Must-Read Books',
      doc: "https://zen-stonebraker-035bb4.netlify.app/books-for-babies.pdf"
    },
    {
      key: 5,
      title: 'Babies health',
      sub:'Your healthy pregnancy and baby care guide',
      doc: "https://zen-stonebraker-035bb4.netlify.app/babies-health.pdf"
    },
    {
      key: 6,
      title: 'Overcome stress',
      sub: 'Stress management for parents',
      doc: "https://zen-stonebraker-035bb4.netlify.app/overcome-stress.pdf"
    },
    {
      key: 7,
      title: 'Making a formula bottle',
      sub: 'How to PrepareFormula for Bottle-Feeding at Home',
      doc: "https://zen-stonebraker-035bb4.netlify.app/making-a-formula-bottle.pdf"
    },
    {
      key: 8,
      title: 'Changing diapers',
      sub: 'Safe and Healthy Diaperingto reduce the spread of germs',
      doc: "https://zen-stonebraker-035bb4.netlify.app/changing-diapers.pdf"
    },
    {
      key: 9,
      title: 'Books for babies',
      sub: 'The Complete Checklist: 100 Must-Read Books',
      doc: "https://zen-stonebraker-035bb4.netlify.app/books-for-babies.pdf"
    }
  ]

const InfoList = ({navigation}: any) => {

    const handleClick = (url: string) => {
        // @ts-ignore
        navigation.navigate("View", {url})
      }

    return (
        <View style={styles.container}>
          <Appbar.Header style={{width: '100%'}}>
          {/* <Appbar.BackAction onPress={_goBack} /> */}
          <Appbar.Content title="Guides" subtitle="Guides On Parenting" />
        </Appbar.Header>
          <ScrollView>
          <List.Section>
            {data.map(d => <List.Item
                key={d.key}
                onPress={()=> handleClick(d.doc)}
                title={d.title}
                description={d.sub}
                left={props => <List.Icon {...props} icon="folder" />}
              />)}
          </List.Section>
          </ScrollView>
          </View>
      );
}

export default InfoList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    }, camera: {
      flex: 1,
    }
  });