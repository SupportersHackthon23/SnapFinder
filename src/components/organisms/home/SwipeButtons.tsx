import { Flex } from '@/components/atoms/Flex'
import { SwipeButton } from '@/components/molecules/buttons/SwipeButton'
import React from 'react'
import { Styles } from 'types/style'


export const SwipeButtons = () => {
  return (
    <Flex style={styles.swipe_buttons}>
        <SwipeButton src="" alt="bad"/>
        <SwipeButton src="" alt="check"/>
    </Flex>
  )
}

const styles:Styles ={
    swipe_buttons:{
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      bottom:"100px",
      left: 0,
    },
}
