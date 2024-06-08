import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const PassengerCabinSelection = props => {
  return (
    <View style={styles.dateModalOuterView}>
      <View
        style={[
          styles.dateModalInnerView,
          {backgroundColor: 'white', paddingHorizontal: 15},
        ]}>
        {/* <View style={styles.headingView}>
          <Text style={styles.headingText}>Passengers and cabin class</Text>
        </View> */}
        <View style={styles.primaryHeadingView}>
          <PrimaryHeading headingTitle="Passengers" />
        </View>

        <View style={{borderBottomWidth: 0.5, paddingBottom: 5}}>
          {/* ButotnCounter 1 */}
          <View style={styles.titleButtonCounterView}>
            <View style={styles.titleView}>
              <QuaternaryHeading headingTitle="Adults" />
              <QuinaryHeading headingTitle="Age 12+" />
            </View>
            <View style={styles.counterView}>
              <MinusIcon
                onPress={onAdultDecrease}
                name="minuscircleo"
                size={30}
                color={
                  adultCounter == 0
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
              <Text style={styles.counterText}>{adultCounter}</Text>
              <PlusIcon
                onPress={onAdultIncrease}
                name="pluscircleo"
                size={30}
                color={
                  adultCounter == 8
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
            </View>
          </View>

          {/* ButotnCounter 2 */}
          <View style={styles.titleButtonCounterView}>
            <View style={styles.titleView}>
              <QuaternaryHeading headingTitle="Children" />
              <QuinaryHeading headingTitle="Age 2-11" />
            </View>
            <View style={styles.counterView}>
              <MinusIcon
                onPress={onChildrenDecrease}
                name="minuscircleo"
                size={30}
                color={
                  childrenCounter == 0
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
              <Text style={styles.counterText}>{childrenCounter}</Text>
              <PlusIcon
                onPress={onChildrenIncrease}
                name="pluscircleo"
                size={30}
                color={
                  childrenCounter == 8
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
            </View>
          </View>

          {/* ButotnCounter 3 */}
          <View style={styles.titleButtonCounterView}>
            <View style={styles.titleView}>
              <QuaternaryHeading headingTitle="Infant" />
              <QuinaryHeading headingTitle="Age under 2, on lap" />
            </View>
            <View style={styles.counterView}>
              <MinusIcon
                onPress={onInfantDecrease}
                name="minuscircleo"
                size={30}
                color={
                  infantCounter == 0
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
              <Text style={styles.counterText}>{infantCounter}</Text>
              <PlusIcon
                onPress={onInfantIncrease}
                name="pluscircleo"
                size={30}
                color={
                  infantCounter == 8
                    ? EmiratesColors.GrayText
                    : EmiratesColors.OrignalBlack
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.planeTypeView}>
          <View style={styles.headingText}>
            <PrimaryHeading headingTitle="Cabin class" />
          </View>

          <View>
            <FlatList
              data={CabinClassData}
              renderItem={renderCabinClass}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              paddingTop: 30,
            }}>
            <PrimaryButton
              onPress={() => setPassengerModalVisible(false)}
              titleText="Confirm"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PassengerCabinSelection;

// {
//   /* Passengers and class Modal */
// }
// {/* <Modal
//   visible={passengerModalVisible}
//   onRequestClose={() => setPassengerModalVisible(false)}>
//   <View style={styles.dateModalOuterView}>
//     <View
//       style={[
//         styles.dateModalInnerView,
//         {backgroundColor: 'white', paddingHorizontal: 15},
//       ]}>
//       <View style={styles.headingView}>
//         <Text style={styles.headingText}>Passengers and cabin class</Text>
//       </View>
//       <View style={styles.primaryHeadingView}>
//         <PrimaryHeading headingTitle="Passengers" />
//       </View>

//       <View style={{borderBottomWidth: 0.5, paddingBottom: 5}}>
//         {/* ButotnCounter 1 */}
//         <View style={styles.titleButtonCounterView}>
//           <View style={styles.titleView}>
//             <QuaternaryHeading headingTitle="Adults" />
//             <QuinaryHeading headingTitle="Age 12+" />
//           </View>
//           <View style={styles.counterView}>
//             <MinusIcon
//               onPress={onAdultDecrease}
//               name="minuscircleo"
//               size={30}
//               color={
//                 adultCounter == 0
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//             <Text style={styles.counterText}>{adultCounter}</Text>
//             <PlusIcon
//               onPress={onAdultIncrease}
//               name="pluscircleo"
//               size={30}
//               color={
//                 adultCounter == 8
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//           </View>
//         </View>

//         {/* ButotnCounter 2 */}
//         <View style={styles.titleButtonCounterView}>
//           <View style={styles.titleView}>
//             <QuaternaryHeading headingTitle="Children" />
//             <QuinaryHeading headingTitle="Age 2-11" />
//           </View>
//           <View style={styles.counterView}>
//             <MinusIcon
//               onPress={onChildrenDecrease}
//               name="minuscircleo"
//               size={30}
//               color={
//                 childrenCounter == 0
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//             <Text style={styles.counterText}>{childrenCounter}</Text>
//             <PlusIcon
//               onPress={onChildrenIncrease}
//               name="pluscircleo"
//               size={30}
//               color={
//                 childrenCounter == 8
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//           </View>
//         </View>

//         {/* ButotnCounter 3 */}
//         <View style={styles.titleButtonCounterView}>
//           <View style={styles.titleView}>
//             <QuaternaryHeading headingTitle="Infant" />
//             <QuinaryHeading headingTitle="Age under 2, on lap" />
//           </View>
//           <View style={styles.counterView}>
//             <MinusIcon
//               onPress={onInfantDecrease}
//               name="minuscircleo"
//               size={30}
//               color={
//                 infantCounter == 0
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//             <Text style={styles.counterText}>{infantCounter}</Text>
//             <PlusIcon
//               onPress={onInfantIncrease}
//               name="pluscircleo"
//               size={30}
//               color={
//                 infantCounter == 8
//                   ? EmiratesColors.GrayText
//                   : EmiratesColors.OrignalBlack
//               }
//             />
//           </View>
//         </View>
//       </View>

//       <View style={styles.planeTypeView}>
//         <View style={styles.headingText}>
//           <PrimaryHeading headingTitle="Cabin class" />
//         </View>

//         <View>
//           <FlatList
//             data={CabinClassData}
//             renderItem={renderCabinClass}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </View>

//         <View
//           style={{
//             justifyContent: 'flex-end',
//             paddingTop: 30,
//           }}>
//           <PrimaryButton
//             onPress={() => setPassengerModalVisible(false)}
//             titleText="Confirm"
//           />
//         </View>
//       </View>
//     </View>
//   </View>
// </Modal> */}

const styles = StyleSheet.create({
  container: {},
  primaryHeadingView: {
    paddingTop: 20,
  },
  titleButtonCounterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titleView: {},
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 30,
    color: EmiratesColors.OrignalBlack,
    paddingHorizontal: 25,
  },

  dateModalOuterView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
  dateModalInnerView: {
    flex: 1,
  },
  headingView: {
    backgroundColor: EmiratesColors.White,
    borderBottomWidth: 0.5,
    borderBottomColor: EmiratesColors.GrayText,
  },
});
