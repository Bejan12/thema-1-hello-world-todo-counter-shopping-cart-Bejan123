import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: '40%', 
    padding: 15, 
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10, 
    paddingHorizontal: 10, 
    borderRadius: 5,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10, 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  task: {
    fontSize: 18, 
  },
  completedTask: {
    fontSize: 18, 
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  completeButton: {
    color: 'green',
    fontSize: 14, 
  },
  deleteButton: {
    color: 'red',
    fontSize: 14, 
  },
});