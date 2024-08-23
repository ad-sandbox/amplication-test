import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccessPointTitle } from "../accessPoint/AccessPointTitle";
import { DeveloperTitle } from "../developer/DeveloperTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessPoints"
          reference="AccessPoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessPointTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="developer.id"
          reference="Developer"
          label="Owner"
        >
          <SelectInput optionText={DeveloperTitle} />
        </ReferenceInput>
        <TextInput label="label" source="label" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
