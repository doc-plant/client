import * as firebase from 'firebase';

export function add_image(image) {
 return async (dispatch) => {
    const imageUri = await uploadImage(image,new Date().getTime())
    dispatch({
      type: "ADD_IMAGE",
      payload: imageUri
    })

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
