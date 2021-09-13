import { ChangeEvent, useEffect, useState } from "react";
import ItemEditUI from "./itemEdit.presenter";
import firebase from "../../../../commons/firebase/firebase";

export default function ItemEdit(props) {
  const [isAdd, setIsAdd] = useState(false);
  const [ItemTitle, setItemTitle] = useState("");

  const onClickAddItem = () => {
    const itemId = firebase.firestore().collection("itme").doc().id;
    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
      itemId: itemId,
      itemContents: "상세 내용을 넣어주세요.",
      basketId: props.basketId,
    };
    firebase.firestore().collection("item").doc(itemId).set(data);
    setIsAdd(false);
  };

  const onChangeItemTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  return (
    <div>
      <ItemEditUI
        onChangeItemTitle={onChangeItemTitle}
        onClickAddItem={onClickAddItem}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
      />
    </div>
  );
}