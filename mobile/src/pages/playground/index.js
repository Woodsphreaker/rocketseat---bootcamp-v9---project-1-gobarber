import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import axios from 'axios'

// import { Container } from './styles';

import PDFView from '~/components/PDFView'

const Playground = () => {
  const [transactionPDF, setTransactionPDF] = useState('')
  const [isLoadind, setLoadding] = useState(true)

  useEffect(() => {
    const getPdf = async () => {
      setLoadding(true)
      const {
        data: { pdf },
      } = await axios.get('https://2iwcx.sse.codesandbox.io/transactionTerm')

      setTransactionPDF(pdf)
      setLoadding(false)
    }

    getPdf()
  }, [])

  const PDFViewComponent = ({ source }) => {
    if (isLoadind) {
      return false
    }

    const transactionDocument = { uri: `data:application/pdf;base64,${source}` }
    // return (
    //   <View>
    //     <Text>{transactionDocument}</Text>
    //   </View>
    // )
    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text>Title</Text>
        </View>
        <PDFView source={transactionDocument} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text>Footer</Text>
        </View>
      </>
    )
  }

  const LoadingComponent = () => {
    if (isLoadind) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={50} />
        </View>
      )
    }
    return false
  }

  return (
    <View style={{ flex: 1 }}>
      <LoadingComponent />

      <PDFViewComponent source={transactionPDF} />
    </View>
  )
}

export default Playground
