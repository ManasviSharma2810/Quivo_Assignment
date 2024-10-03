import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'fr';
  import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '', 
    };
  }
  onDayPress = (day) => {
    this.setState({ selected: day.dateString });
  };
  render() {
    const { selected } = this.state; 
    return (
      <Calendar
        onDayPress={this.onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
    );
  }
}

