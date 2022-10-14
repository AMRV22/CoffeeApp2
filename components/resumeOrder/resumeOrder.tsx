import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { useState } from "react";

const ResumeComponent = () => {
  return (
    <View style={[styles.selectionContainer]}>
      <Text style={styles.title}>Resumen :</Text>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Cantidad solicitada:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Tamaño:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Tipo de café:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Tipo de pago:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Descuento %:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>
      <Layout style={styles.selectContainerRow} level="1">
        <Text style={styles.subtitle}>Total a pagar:</Text>
        <Text style={styles.subtitle}>xxxxx</Text>
      </Layout>

    </View>
  );
};

const styles = StyleSheet.create({
  selectionContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 20,
  },
  subtitle: {
    flex: 1,
    margin: 4,
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 5,
  },
  selectContainerRow: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
});

export default ResumeComponent;
