import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const content = snapshot.docs.map((contentObj) => {
          return { ...contentObj.data(), docId: contentObj.id };
        });
        setContent(content);
      })
      .catch((err) => console.log(err));
  }, [firebase, target]);
  return { [target]: content };
}
