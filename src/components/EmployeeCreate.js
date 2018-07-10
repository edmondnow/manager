import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} 
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="000-333-3323"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} 
          />
        </CardSection>

      <CardSection>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={styles.pickerLabelStyle}>Shift</Text>
          </View>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            style={{ flex: 1 }}
          > 
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" /> 
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
} 

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};


export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);