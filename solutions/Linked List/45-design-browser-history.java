class Node {
    String data;
    Node next;
    Node prev;

    Node(String homepage) {
        data = homepage;
    }
}

class BrowserHistory {
    Node curr;
    public BrowserHistory(String homepage) {
        curr = new Node(homepage);
    }
    
    public void visit(String url) {
        Node node = new Node(url);
        curr.next = node;
        node.prev = curr;
        curr = node;
    }
    
    public String back(int steps) {
        while(steps-- > 0 && curr.prev!=null) {
            curr = curr.prev;
        }
        return curr.data;
    }
    
    public String forward(int steps) {
        while(steps-- > 0 && curr.next!=null) {
            curr = curr.next;
        }
        return curr.data;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */