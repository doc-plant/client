import * as firebase from 'firebase';
import {local} from '../helpers/index';
import {AsyncStorage} from 'react-native';

export function add_image(image) {
 return async (dispatch) => {
   try {     
    const imageUri = await uploadImage(image,new Date().getTime())
    console.log(imageUri)
    const {data} = await local.post('/histories', {
      image: imageUri
    }, {
      headers: {
        token: await AsyncStorage.getItem('userToken') 
      }
    })
    if (data.message) {
      console.log('masuk bosss')
      dispatch({
        type: "NOT_FOUND",
        payload: data
      })
    } else {
      dispatch({
        type: "ADD_IMAGE",
        payload: data
      })
    }
  } catch (error) {
     console.log(error)
  }

  }
}
export function add_form_image (image) {
  return async (dispatch) => {
    try {     
     const imageUri = await uploadImage(image,new Date().getTime())
     dispatch({
       type: "ADD_IMAGE_FORM",
       payload: imageUri
     })
   } catch (error) {
      console.log(error)
   }
 
   }
}

uploadImage = async (uri, imageName) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child("images/" + imageName);
  const snapshot = await ref.put(blob);
  blob.close();
  return url = await snapshot.ref.getDownloadURL();
};
