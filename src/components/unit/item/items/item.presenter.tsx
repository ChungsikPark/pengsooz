import { Draggable, Droppable } from "react-beautiful-dnd";
import { Dispatch, SetStateAction } from "react";
import { Wrapper, ItemContainer } from "./item.styles";

declare const window: typeof globalThis & {
  itemState: number[];
};

interface Iprops {
  onClickEnterToItemDetail: (event: any) => () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  ItemData: never[];
  basketId: string;
  colorCode: string;
}

export default function ItemUI(props: Iprops) {
  const filteredDocs = props.ItemData.filter(
    (doc: any) => props.basketId === doc.basketId
  );

  if (typeof window !== "undefined") window.itemState = [];
  return (
    <Droppable droppableId={props.basketId} type="item">
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          <div>
            {filteredDocs.map((data: any, index: number) => {
              if (window.itemState.length < filteredDocs.length)
                window.itemState = [...window.itemState, data.index];
              return (
                <Draggable
                  draggableId={data.itemId}
                  index={index + 1}
                  key={data.itemId + index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ItemContainer
                        onClick={props.onClickEnterToItemDetail(data)}
                        color={props.colorCode}
                      >
                        {data.itemTitle}||인덱스{data.index}
                      </ItemContainer>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        </Wrapper>
      )}
    </Droppable>
  );
}
