import { StyleSheet, Platform } from 'react-native';
import { responsiveHeight } from '../components/customResponsiveDimension';

export default StyleSheet.create({
  responsive_page_with_height: {
    ...Platform.select({
      web: {
        height: responsiveHeight(100),
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    })
  },
  margin_horizontal: { marginLeft: '3.5%', marginRight: '3.5%' },
  margin_horizontal_LAPTOP: { marginLeft: '15%', marginRight: '15%' },
  margin_vertical_five: { marginVertical: '5%' },
  branch_row_section: { flexDirection: 'row', flex: 10, marginTop: '1%' },
  aba_number_section: { flex: 3.7 },
  other_section: { flex: 4 },
  aba_number_textfield: { width: '108%' },
  aba_number_infotip: { flex: 0.3, justifyContent: 'center' },
  dropdown_header_section_style: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)'
  },
  dropdown_header_label_style: { flexBasis: '95%' },
  dropdown_header_label_style_MDPI: { flexBasis: '95%', marginBottom: -20 },
  dropdown_header_label_style_LDPI: { flexBasis: '95%', marginBottom: -20 },
  dropdown_header_arrow: { alignSelf: 'center', marginRight: 5 },
  dropdown_menuoptions_style: {
    marginTop: 60,
    backgroundColor: '#FCFCFC',
    width: '93%'
  },
  dropdown_menuoptions_style_LAPTOP: { width: '28%' },
  dropdown_menuoptions_style_select: {
    marginTop: 60,
    backgroundColor: '#FCFCFC',
    width: '69%'
  },
  dropdown_menuoptions_style_select_LAPTOP: { width: '25%' },
  dropdown_menuoption_section: { padding: 10 },
  dropdown_menuoption_section_hover: {
    padding: 10,
    backgroundColor: '#097dfa'
  },
  blank_section: {},
  blank_section_LAPTOP: { flex: 6 },
  button_section: {
    marginTop: '25%',
    marginBottom: '3%',
    flexDirection: 'column',
    zIndex: -1
  },
  button_section_XXHDPI: { marginTop: '8%' },
  button_section_XXXHDPI: { marginTop: '5%' },
  button_section_LAPTOP: { marginTop: '3%', flexDirection: 'row', flex: 10 },
  recipt_button_section: { marginTop: '5%', flexDirection: 'column-reverse' },
  recipt_button_section_LAPTOP: {
    marginTop: '3%',
    flexDirection: 'row',
    flex: 10
  },
  button_back: { flex: 1.3, marginRight: 0 },
  button_back_LAPTOP: { flex: 1.3, marginRight: '2%' },
  button: { flex: 2 },
  button_data: { fontSize: 16, fontWeight: 'bold' },
  button_blank: {},
  button_blank_LAPTOP: { flex: 4 },
  receipt_data_section: { flexDirection: 'column', paddingVertical: '5%' },
  receipt_data_section_XXXHDPI: { paddingVertical: '1%' },
  receipt_data_section_LAPTOP: { flexDirection: 'row', paddingVertical: '1%' },
  receipt_data_section_header_section: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e77817',
    justifyContent: 'space-between'
  },
  receipt_data_section_header_data: {
    paddingVertical: '2%',
    color: '#e77817',
    fontSize: 20
  },
  edit_icon_section: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: '2%'
  },
  edit_icon: { height: 20, width: 20 },
  receipt_data_left_section: { flex: 1, paddingRight: '0%' },
  receipt_data_left_section_LAPTOP: { flex: 1, paddingRight: '20%' },
  receipt_first_section: { paddingTop: '2%', paddingBottom: '1%' },
  receipt_data_right_section: { flex: 1 },
  receipt_next_row_section: { paddingVertical: '1%' },
  receipt_label: { fontSize: 12, paddingVertical: '1%', color: '#4c4c4c' },
  receipt_data: { fontSize: 18, paddingVertical: '1%', color: '#4c4c4c' },
  margin_top_one: { marginTop: '1%' },
  margin_top_variable: { marginTop: '2%' },
  margin_top_variable_LDPI: { marginTop: '5%' },
  margin_top_variable_MDPI: { marginTop: '5%' },
  margin_top_variable_HDPI: { marginTop: '4%' },
  margin_top_variable_XHDPI: { marginTop: '3%' },
  margin_top_variable_XXHDPI: { marginTop: '3%' },
  margin_top_five: { marginTop: '5%' },
  border_bottom_width_zero: { borderBottomWidth: 0 },
  padding_zero: { padding: 0 },
  font_bold: { fontWeight: 'bold' },
  align_items_center: { alignItems: 'center' },
  flex_row_direction: { flexDirection: 'row' },
  ach_auth: {
    fontSize: 16,
    marginLeft: '1%',
    color: '#4C4C4C',
    alignSelf: 'center'
  },
  yod_ach_auth: {
    fontSize: 16,
    color: '#4C4C4C'
  },
  terms_and_conditions: { color: '#e77817', fontSize: 16 },
  my_account_title_icon_section: {
    flex: 1,
    borderRadius: 5,
    padding: '1%'
  },
  my_account_title_icon_section_LDPI: {
    padding: '3%'
  },
  my_account_title_icon_section_MDPI: {
    padding: '3%'
  },
  my_account_title_icon_section_HDPI: {
    padding: '3%'
  },
  my_account_title: {
    color: '#102b63',
    marginLeft: '2%',
    fontWeight: 'bold',
    fontSize: 16
  },
  error_msg: { color: 'red', fontSize: 13 },
  did_you_know_section: {
    backgroundColor: '#fcf2ec',
    borderRadius: 2,
    marginVertical: 10,
    padding: '1%',
    flex: 5
  },
  did_you_know_title_section: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  did_you_know_title: { fontSize: 16, fontWeight: 'bold', color: '#5f5f5f' },
  did_you_know_body: {
    fontSize: 14,
    color: '#5f5f5f',
    paddingTop: '0.5%',
    lineHeight: 20
  },
  add_button_section: { marginLeft: 10, flex: 1.2, justifyContent: 'center' },
  kindly_note: {
    backgroundColor: '#f3f3f3',
    color: '#a3a3a3',
    borderRadius: 2,
    padding: '2%',
    fontSize: 12,
    lineHeight: 20
  },
  kindly_note_section: { flex: 5.2, marginTop: 14 },
  note_blank_section: {},
  note_blank_section_XHDPI: { flex: 2 },
  note_blank_section_XXHDPI: { flex: 3 },
  note_blank_section_XXXHDPI: { flex: 4 },
  note_blank_section_LAPTOP: { flex: 5 },
  icici_orange_color: { color: '#e77817' },
  tcStyle_LDPI: { marginTop: 20 },
  tcStyle_MDPI: { marginTop: 20 },
  tcStyle_HDPI: { marginTop: 20 },
  tcStyle_XHDPI: { marginTop: 20 },
  tcStyle_XXHDPI: { marginTop: 20 },
  tcStyle_XXXHDPI: { flexDirection: 'row' },
  tcStyle_LAPTOP: { flexDirection: 'row' }
});
