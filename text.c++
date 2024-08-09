using namespace std;

class test {
    int a;
    int b;
    void setDefault() {
        a = 0;
        b = 0;
        cout<<a<<" "<<b;
    }
};

int main() {
    test ob;
    ob.setDefault();
}