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
		f void display(test &);
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
[answer for these](https://chatgpt.com/c/e3259b5c-3088-41b8-a0b5-fcadded64fb3)
types of inheritance
- destructor points
```c++
#include <iostream>

class Base {
public:
    Base() {
        std::cout << "Base constructor called\n";
    }

    // Non-virtual destructor
    ~Base() {
        std::cout << "Base destructor called\n";
    }
};

class Derived : public Base {
public:
    Derived() {
        std::cout << "Derived constructor called\n";
    }

    ~Derived() {
        std::cout << "Derived destructor called\n";
    }
};

int main() {
    Derived ob;
    return 0;
}

```
/tmp/Wi8hiduKc9.o
Base constructor called
Derived constructor called
Derived destructor called
Base destructor called


=== Code Execution Successful ===
```c++
#include <iostream>

class Base {
public:
    Base() {
        std::cout << "Base constructor called\n";
    }

    // Non-virtual destructor
    ~Base() {
        std::cout << "Base destructor called\n";
    }
};

class Derived : public Base {
public:
    Derived() {
        std::cout << "Derived constructor called\n";
    }

    ~Derived() {
        std::cout << "Derived destructor called\n";
    }
};

void exampleWithoutVirtualDestructor() {
    Base* obj = new Derived();
    delete obj; // Only Base destructor will be called
}

int main() {
    exampleWithoutVirtualDestructor();
    return 0;
}
/tmp/iQLDS9G48z.o
Base constructor called
Derived constructor called
Base destructor called


=== Code Execution Successful ===
```
- virtual keyword
- pure virtual function
- friend function - scope, syntax, global function, member function of another class
- member function
- structure and class comparison
- do diff btw call by value, reference, address with example

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

