class MinStack {
    List<Integer> stack = new ArrayList<>();
    List<Integer> minStack = new ArrayList<>();

    public MinStack() {
        
    }
    
    public void push(int value) {
        stack.add(value);
        if(minStack.size()>0) {
            minStack.add(Math.min(minStack.get(minStack.size()-1), value));
        } else {
            minStack.add(value);
        }
    }
    
    public void pop() {
        stack.remove(stack.size()-1);
        minStack.remove(minStack.size()-1);
    }
    
    public int top() {
        return stack.get(stack.size()-1);
    }
    
    public int getMin() {
        return minStack.get(minStack.size()-1);
    }
}
