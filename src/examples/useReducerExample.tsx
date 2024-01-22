import { useReducer, useState } from "react";

enum NameActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  EDIT = "EDIT",
}

interface NameState {
  value: string;
  id: number;
}

interface NameAction {
  type: NameActionKind;
  payload: string;
  id?: number;
}

export function UseReducerExample() {
  const [names, dispatch] = useReducer(namesReducer, []);
  const [inputName, setInputName] = useState("");

  function handleDelete(id: number) {
    dispatch({
      type: NameActionKind.DELETE,
      payload: "",
      id: id,
    });
  }

  function handleAdd() {
    dispatch({
      type: NameActionKind.ADD,
      payload: inputName,
    });
    setInputName('');
  }

  function handleEdit(id: number, value: string) {
    dispatch({
      type: NameActionKind.EDIT,
      payload: value,
      id: id,
    });
  }

  return (
    <>
      <h2>using useReducer()</h2>
      <div>
        <label>
          Enter a name{" "}
          <input onChange={(event) => setInputName(event.target.value)} value={inputName} />
          <button onClick={() => handleAdd()}>Add Name</button>
        </label>
      </div>
      All your names:
      {names.map((name, index) => (
        <NameItem
          key={index}
          name={name}
          onDelete={() => handleDelete(name.id)}
          onEdit={(value) => handleEdit(name.id, value)}
        />
      ))}
    </>
  );
};

function NameItem(props: {
  name: NameState;
  onDelete: () => void;
  onEdit: (editValue: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.name.value);

  let content;

  function handleCancel() {
    setIsEditing(false);
    setEditValue(props.name.value);
  }

  function handleSave() {
    setIsEditing(false);
    props.onEdit(editValue);
  }

  if (isEditing) {
    content = (
      <>
        <input
          defaultValue={props.name.value}
          onChange={(event) => setEditValue(event.target.value)}
        />
        <button onClick={() => handleSave()}>Save</button>
        <button onClick={() => handleCancel()}>Cancel</button>
      </>
    );
  } else {
    content = (
      <>
        {props.name.value}
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => props.onDelete()}>Delete</button>
      </>
    );
  }

  return <div>{content}</div>;
}

function namesReducer(state: NameState[], action: NameAction) {
  const { type, payload } = action;

  switch (type) {
    case NameActionKind.ADD:
      return [
        ...state,
        {
          value: payload,
          id: state.length,
        },
      ];
    case NameActionKind.DELETE:
      return state.filter((name) => name.id !== action.id);
    case NameActionKind.EDIT:
      return state.map((name) => {
        if (name.id === action.id) {
          return { ...name, value: action.payload };
        } else {
          return name;
        }
      });
    default:
      return state;
  }
}
