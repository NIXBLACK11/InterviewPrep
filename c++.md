NOTE:
If *then address and &to get address

so if object is passed as simple

so get it through 
```c++
	#include<iostream>
	using namespace std;

	class test{
	    private:
		int a;
		int b;
	    public:
		test(int a,int b)
		{
		    this->a=a;
		    this->b=b;
		}
		friend void display(test &);
	};
	void display(test &ptr)
	{
	    cout<<ptr.a;
	    cout<<ptr.b;
	}
	int main()
	{
	    test ptr(1,2);
	    display(ptr);
	}
```

if through new then

```c++
	#include<iostream>
	using namespace std;

	class test{
	    private:
		int a;
		int b;
	    public:
		test(int a,int b)
		{
		    this->a=a;
		    this->b=b;
		}
		friend void display(test *);
	};
	void display(test *ptr)
	{
	    cout<<ptr->a;
	    cout<<(*ptr).b;
	}
	int main()
	{
	    test *ptr = new test(1,2);
	    display(ptr);
	}
```

types of inheritance
destructor points
virtual keyword
pure virtual function
friend function - scope, syntax, global function, member function of another class
member function
structure and class comparison

```c++
class Base {
public:
    virtual void pureVirtualFunction() = 0; // Pure virtual function
    void normalFunction() {
        cout << "Normal function in Base" << endl;
    }
};

class Derived : public Base {
public:
    void pureVirtualFunction() override {
        cout << "Pure virtual function implemented in Derived" << endl;
    }
    void normalFunction() {
        cout << "Normal function in Derived" << endl;
    }
};

int main() {
    Base* obj = new Derived();
    obj->pureVirtualFunction(); // Calls Derived's implementation
    obj->normalFunction();      // Calls Base's normalFunction() because it's not virtual
    delete obj;
    return 0;
}
```
